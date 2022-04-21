import {
  IFetcherHelper,
  IFetcherParameters,
} from './interfaces'

export const fetcher: IFetcherHelper = async (
  {
    url = '',
    form = null,
    method = 'GET'
  }: IFetcherParameters
): Promise<Response> => {
  let requestInfo: RequestInfo // action attribute of form element
  let formData: FormData
  let headers = {}
  let body = ''

  if (form) {
    method = 'GET'
    requestInfo = form.getAttribute('action')
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    formData = new FormData(form)
    //@ts-ignore
    body = new URLSearchParams(formData).toString()
  }
  else if (url) {
    requestInfo = url
  }

  const response = await fetch(requestInfo, {
    method: method,
    headers: headers,
    body: body
  })

  return response
}


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
