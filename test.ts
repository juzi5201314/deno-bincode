import { decode, encode } from './mod.ts'

// @ts-ignore
Deno.test(
    'encode-decode Test',
    () => {
        const obj = {
            a: 1,
            b: [2, 3]
        }
        const encoded = encode(obj)
        const decoded = decode(encoded)

        console.assert(obj.a == decoded.a)
        console.assert(JSON.stringify(obj) == JSON.stringify(decoded))
    }
)

import { runBenchmarks, bench } from "https://deno.land/std@0.66.0/testing/bench.ts";

bench({
    name: "Bench encode",
    runs: 10000,
    // @ts-ignore
    func(b) {
        const obj = {
            a: 1
        }
        b.start()
        const encoded = encode(obj)
        b.stop()
    }
})

bench({
    name: "Bench decode",
    runs: 10000,
    // @ts-ignore
    func(b) {
        const encoded = encode({
            a: 1
        })
        b.start()
        const decoded = decode(encoded)
        b.stop()
    }
})

runBenchmarks()