export type TPagination = {
  page?: number
  per_page?: number
  offset?: number
  order?: 'asc' | 'desc'
  orderby?: string
}

export type TPostsArgs = TPagination & {
  context?: 'view' | 'embed' | 'edit'
  search?: string
  after?: string
  before?: string
  modified_after?: string
  modified_before?: string
  author?: number
  author_exclude?: number
  exclude: number[]
  include: number[]
  search_columns?: string[]
  slug?: string
  status?: string
  tax_relation?: 'AND' | 'OR'
  categories?: number[]
  categories_exclude?: number[]
  tags?: number[]
  tags_exclude?: number[]
  sticky?: boolean
}

export type TPostArgs = {
  id?: number
  context?: 'view' | 'embed' | 'edit'
  password?: string
}
