export type FlavorModel = {
  id: number
  flavor: string
  description: string
  price: number
}

export type ExtraModel = {
  id: number
  extra: string
  description: string
  price: number
}

export type ClientModel = {
  id: number
  name: string
  street: string
  streetNumber: string
  neighborhood: string
  complement?: string
  city: string
  phoneNumber: string
  orderId: number
}

export type PizzaModel = {
  id: number
  flavors: string[]
  extras: string[]
  price: number
  notes: string
  orderId: number
}

export type OrderModel = {
  id: number
  client: ClientModel
  pizzas: PizzaModel[]
  price: number
  paymentMethod: string
  createdAt: Date
  status: OrderStatus
}

export enum OrderStatus {
  Analisando = 1,
  Fazendo = 2,
  Entregando = 3,
  Entregue = 4,
  Cancelado = 5,
  Reembolsado = 6,
  Nao_recebido = 7
}
