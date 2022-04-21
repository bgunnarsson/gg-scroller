// Fetcher
export interface IFetcherHelper {
  (
    { }: IFetcherParameters
  )
}

export interface IFetcherParameters {
  url?: string,
  form?: HTMLFormElement,
  method?: string
}

