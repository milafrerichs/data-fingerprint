# Data Fingerprint

A reusable svelte component for displaying the inside of a data file.  
Color your types and spot data errors or missing values.  
conforms to d3.dsv parser output. 

### Heavily inspired by CSV Fingerprint from setosa

https://github.com/setosa/csv-fingerprint

## Usage

__with svelte:__

```
import Fingerprint from 'data-fingerprint';

<Fingerprint data={[{'a': 1}, columns: ['a']]} />

```

__standalone__
```
new Fingerprint({
  target: document.querySelector('#yourId'),
  props: {
    data: [{'a': 1}, columns: ['a']]
  }
});
```
