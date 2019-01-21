# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.destroy_all
Tcf.destroy_all
Cohort.destroy_all


students = Student.create([
    {
        name: 'Andy Purbrick'
    },
    {
        name: 'Claudia Fox'
    },
    {
        name: 'Holly Atkinson'
    },
    {
        name: 'Ian Harrison'
    },
    {
        name: 'Jack Ling'
    },
    {
        name: 'Janine Luk'
    },
    {
        name: 'Joaquim Barreto'
    },
    {
        name: 'Jody Neckles'
    },
    {
        name: 'Kevin Sutton'
    },
    {
        name: 'Nathan Bell'
    },
    {
        name: 'Serena Nakatani-Brown'
    },
    {
        name: 'Tom Rowson'
    },
    {
        name: 'Valeria Ragonese'
    },
    {
        name: 'Paul Clark'
    }
])

tcfs = Tcf.create([
    {
        name: 'Guy Bennett-Jones'
    },
    {
        name: 'Vasile Cojusco'
    },
    {
        name: 'Wachira'
    },
    {
        name: 'Alice'
    },
])

cohorts = Cohort.create([
    {
        name: 'git-commit-suicide'
    },
    {
        name: 'git-some'
    }
])