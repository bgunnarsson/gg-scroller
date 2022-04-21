// interface IDictionary {
//   key: string
//   value: string
// }

interface IWindowExtensionDictionary extends Window {
  dictionary: []
}

declare let window: IWindowExtensionDictionary

export const dictionary = (key: string) => {
  const getDictionary = window.dictionary
  let returnedValue

  if (getDictionary) {
    for (let [dictKey, value] of Object.entries(getDictionary)) {
      if (dictKey === key) {
        returnedValue = value
      }
    }

    return returnedValue
  }

  return
}
