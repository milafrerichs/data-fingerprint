<script>
  import { onMount } from 'svelte';

  export let width = 200;
  export let height = 200;
  export let data;// should conform to d3.dsv
  export let colors = {
    empty: '#34495e',
    nan: '#f1c40f',
    decimal: '#9b59b6',
    integer: '#3498db'
  }

  let columns = data.columns;
  let columnLength = columns.length;
  let rowLength = data.length;
  let cellSize = 0
  let ctx;

  let rects = []

  $: if(data) {
    Array.from(data).forEach((rows, rowNumber) => {
      columns.forEach((d, column) => {
        rects.push({
          type: type(rows[d]),
          x1: (column / columnLength),
          y1: rowNumber / rowLength
        })
      })
    })
  }

  $: if(rects.length > 0 && ctx) {
    let columnWidth = width / (columnLength);
    let rowHeight = height / (rowLength);
    ctx.clearRect(0, 0, width, height)
    rects.forEach(function(r, i){
      ctx.beginPath()
      ctx.fillStyle = r.type
      ctx.rect(~~(r.x1*width),~~(r.y1*height),columnWidth,rowHeight)
      ctx.fill()
    });
  }

  let canvas;

  onMount(() => {
    ctx = canvas.getContext('2d');
  })

  function type(d) {
    if(d === '') return colors.empty
      if(isNaN(+d)) return colors.nan
        //if(d.indexOf('.') !== -1) return colors.decimal
        return colors.integer
  }

</script>

<canvas
     bind:this={canvas}
     width={width}
     height={height}
      data-testid="canvas"
      ></canvas>
