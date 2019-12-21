const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');

const Todos = mongoose.model('Todos');


router.post('/add', auth.required, async (req, res, next) => {
    const { body: { todo } } = await req;
    console.log(auth.optional);

    // console.log(req.headers);
    const finalTodo = new Todos(todo);



    const creat = finalTodo.save()
    res.send(finalTodo);
    // res.status(500).json({error: 'an error occurred'});



});
router.get('/', auth.required, async (req, res, next) => {


    const list = await Todos.find({})
    res.send(list);
    // res.status(500).json({error: 'an error occurred'});



});
router.get('/delete/:id', auth.required, async (req, res, next) => {

    const id = req.params.id;
    const todo = await Todos.findByIdAndRemove(id);
    res.send(todo);
    // res.status(500).json({error: 'an error occurred'});



});
router.get('/check/:id', auth.required, async (req, res, next) => {

    const id = req.params.id;
    console.log(id);
    const todo = await Todos.findOneAndUpdate({ "_id": id }, { checked: true });
    res.send(todo);
    // res.status(500).json({error: 'an error occurred'});



});
router.get('/uncheck/:id', auth.required, async (req, res, next) => {

    const id = req.params.id;

    const todo = await Todos.findOneAndUpdate({ "_id": id }, { checked: false });
    res.send(todo);
    // res.status(500).json({error: 'an error occurred'});



});
module.exports = router;