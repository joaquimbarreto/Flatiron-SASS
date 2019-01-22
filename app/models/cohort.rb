class Cohort < ApplicationRecord
    has_many :tcfs
    has_many :students
    has_many :presences, through: :students
end
