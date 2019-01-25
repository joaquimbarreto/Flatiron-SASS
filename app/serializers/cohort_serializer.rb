class CohortSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :students
  has_many :presences, through: :students
  class StudentSerializer < ActiveModel::Serializer
    attributes :id, :name, :cohort_id
  end
end
