export interface Response<T>{  // T é uma propriedade genérica
    message?: string,
    data: T
}