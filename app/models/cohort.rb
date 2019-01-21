class Cohort < ApplicationRecord
    has_many :tcfs
    has_many :students
end
