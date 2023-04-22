import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)

router.get('/new', postsCtrl.new)

router.get('/:postId', postsCtrl.show)

router.get('/:postId/edit', isLoggedIn, postsCtrl.edit)

router.post('/', isLoggedIn, postsCtrl.create)

router.put('/:postId', isLoggedIn, postsCtrl.update)

router.delete('/:postId', isLoggedIn, postsCtrl.delete)

export {
  router
}
