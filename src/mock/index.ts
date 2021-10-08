import Mock from 'better-mock'
import { userMock } from './user'
import { cartMock } from './cart'

Mock.setup({
  timeout: '400-600',
})

userMock(Mock)
cartMock(Mock)

export default Mock
