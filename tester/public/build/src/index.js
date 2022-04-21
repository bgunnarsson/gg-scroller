import { fetcher } from 'helpers';
fetcher({ url: 'https://indo-api.test.vettvangur.info/umbraco/api/headless/GetChildren?key=a8a839ba-bc06-4414-a74a-1757b4deb1ce&WithProperties=true' })
    .then(function (d) { return d.json(); })
    .then(function (r) { return console.log(r); });
export var Greeter = function (name) { return "Hello ".concat(name); };
//# sourceMappingURL=index.js.map