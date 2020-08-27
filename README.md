# deno-bincode

A deno binding of [servo/bincode](https://github.com/servo/bincode) (By wasm)

### Example
```
import { decode, encode } from 'https://cdn.jsdelivr.net/gh/juzi5201314/deno-bincode/mod.ts'

const obj = {
    a: 1,
    b: [2, 3]
}
const encoded = encode(obj)
const decoded = decode(encoded)

console.log(encoded)
console.log(decoded)
```

### Build Wasm
```
wasm-pack build --target deno
```

### Test
```
deno test -A https://cdn.jsdelivr.net/gh/juzi5201314/deno-bincode/test.ts
```