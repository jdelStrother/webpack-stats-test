# reproduction steps

1) Install dependencies with `yarn`.
2) Run `yarn watch`
3) tweak src/index.js

# results

``` 
Hash: 83a259af6472f890dc7e
Version: webpack 4.44.2
Time: 26ms
Built at: 27/10/2020 11:00:01
     Asset       Size  Chunks             Chunk Names
   main.js   7.84 KiB    main  [emitted]  main
stats.json  581 bytes          [emitted]
Entrypoint main = main.js
[./src/index.js] 3.87 KiB {main} [built]

WARNING in Conflict: Multiple assets emit different content to the same filename stats.json

```

