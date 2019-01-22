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
Presence.destroy_all

cohorts = Cohort.create([
    {
        name: 'git-commit-suicide'
    },
    {
        name: 'git-some'
    }
])

students = Student.create([
    {
        name: 'Andy Purbrick',
        cohort_id: 1
    },
    {
        name: 'Claudia Fox',
        cohort_id: 1
    },
    {
        name: 'Holly Atkinson',
        cohort_id: 1
    },
    {
        name: 'Ian Harrison',
        cohort_id: 1
    },
    {
        name: 'Jack Ling',
        cohort_id: 1
    },
    {
        name: 'Janine Luk',
        cohort_id: 1
    },
    {
        name: 'Joaquim Barreto',
        cohort_id: 1
    },
    {
        name: 'Jody Neckles',
        cohort_id: 1
    },
    {
        name: 'Kevin Sutton',
        cohort_id: 1
    },
    {
        name: 'Nathan Bel',
        cohort_id: 1
    },
    {
        name: 'Serena Nakatani-Brown',
        cohort_id: 1
    },
    {
        name: 'Tom Rowson',
        cohort_id: 1
    },
    {
        name: 'Valeria Ragonese',
        cohort_id: 1
    },
    {
        name: 'Paul Clark',
        cohort_id: 2
    },
    {
        name: 'Arti Smarti',
        cohort_id: 2
    },
    {
        name: 'Cristian',
        cohort_id: 2
    },
    {
        name: 'Paolo Ventura',
        cohort_id: 2
    },
    {
        name: 'Sir Mayowa Adeniyi',
        cohort_id: 2
    },
    {
        name: 'Susanne',
        cohort_id: 2
    },
    {
        name: 'Chris',
        cohort_id: 2
    },
    {
        name: 'Damany Bailey',
        cohort_id: 2
    },
    {
        name: 'Rosen',
        cohort_id: 2
    },
    {
        name: 'Romen',
        cohort_id: 2
    },
    {
        name: 'Kenan Berker',
        cohort_id: 2
    }
])

tcfs = Tcf.create([
    {
        name: 'Guy Bennett-Jones',
        cohort_id: 1
    },
    {
        name: 'Vasile Cojusco',
        cohort_id: 1
    },
    {
        name: 'Wachira',
        cohort_id: 2
    },
    {
        name: 'Alice',
        cohort_id: 2
    },
])

presences = Presence.create!([
    {
        present: true,
        late: "",
        date: DateTime.now,
        student_id: 1
    },
    {
        present: true,
        late: DateTime.now,
        date: DateTime.now,
        student_id: 2
    },    
    {
        present: false,
        late: "",
        date: DateTime.now,
        student_id: 3
    },    
    {
        present: true,  
        late: DateTime.now,
        date: DateTime.now,
        student_id: 4
    },    
    {
        present: true,
        late: "",
        date: DateTime.now,
        student_id: 5
    },    
    {
        present: true,
        late: "",
        date: DateTime.now,
        student_id: 6
    },    
    {
        present: true,
        late: DateTime.now,
        date: DateTime.now,
        student_id: 7
    },    
    {
        present: false,
        late: "",
        date: DateTime.now,
        student_id: 8
    },    
    {
        present: true,
        late: DateTime.now,
        date: DateTime.now,
        student_id: 9
    },    
    {
        present: true,
        late: DateTime.now,
        date: DateTime.now,
        student_id: 10
    },    
    {
        present: false,
        late: "",
        date: DateTime.now,
        student_id: 11
    },    
    {
        present: true,
        late: DateTime.now,
        date: DateTime.now,
        student_id: 12
    },    
    {
        present: true,
        late: "",
        date: DateTime.now,
        student_id: 13
    },
    {
        present: true,
        late: "",
        date: "2019-01-21",
        student_id: 1
    }    

])
