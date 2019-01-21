class Student < ApplicationRecord
    belongs_to :cohort
    has_many :tcfs, through: :cohorts
end
