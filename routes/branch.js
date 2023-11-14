const express = require('express')
const router = express.Router()
const branchController = require('../controllers/branch.controllers.js')

// http://localhost:3000/branch
// http://localhost:3000/branch/id

// CRUD -> POST/GET/PUT/PATCH/DELETE

router.get('/:id', branchController.getBranches) // Get single branch
router.get('/', branchController.getBranches) // Get all branches
router.post('/', branchController.createBranch) // Create branch
router.delete('/:id', branchController.deleteBranch) // Delete branch
router.put('/:id', branchController.fullUpdateBranch) // Update all info on a branch

module.exports = router
