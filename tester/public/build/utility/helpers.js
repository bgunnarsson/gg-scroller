import { __awaiter, __generator } from "tslib";
export var fetcher = function (_a) {
    var _b = _a.url, url = _b === void 0 ? '' : _b, _c = _a.form, form = _c === void 0 ? null : _c, _d = _a.method, method = _d === void 0 ? 'GET' : _d;
    return __awaiter(void 0, void 0, void 0, function () {
        var requestInfo, formData, headers, body, response;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    headers = {};
                    body = '';
                    if (form) {
                        method = 'GET';
                        requestInfo = form.getAttribute('action');
                        headers = {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        };
                        formData = new FormData(form);
                        //@ts-ignore
                        body = new URLSearchParams(formData).toString();
                    }
                    else if (url) {
                        requestInfo = url;
                    }
                    return [4 /*yield*/, fetch(requestInfo, {
                            method: method,
                            headers: headers,
                            body: body
                        })];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, response];
            }
        });
    });
};
// export const addToCart = async (
//     button: HTMLAnchorElement | HTMLButtonElement,
//     form: HTMLFormElement
// ) => {
//     const formData = new FormData(form)
//     //@ts-ignore
//     const dataString = new URLSearchParams(formData).toString()
//     button && buttonLoader.start(button)
//     const response = await fetch(form.getAttribute('action'), {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: dataString
//     })
//     if (response.ok) {
//         const data = await response.json()
//         if (data.success) {
//             // success the button
//             button && buttonLoader.success(button)
//         }
//         else {
//             // reset the button
//             button && buttonLoader.reset(button)
//         }
//     }
//     else {
//         button && buttonLoader.error(button)
//     }
//     return response
// }
//# sourceMappingURL=helpers.js.map