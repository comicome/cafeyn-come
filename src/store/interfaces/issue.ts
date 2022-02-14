/* eslint-disable camelcase */
import SubCategory from './subCategory'
export default interface Issue {
  issueId: number
  publicationId: number
  releaseDate: Date
  issueNumber: number
  coverUrl: string
  publication: {
    publicationId: number
    title: string
    category: {
      categoryId: number
      name: string
      subCategories: SubCategory[]
    }
  }
  ratio: number
  hasArticles: boolean
  isPurchased: boolean
  isNew: boolean
  hasMultipleEditions: boolean
  numberOfEdition: number
}
