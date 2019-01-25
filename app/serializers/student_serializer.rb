
  class StudentSerializer < ActiveModel::Serializer
    attributes :id, :name, :cohort_id
    has_many :presences
    class PresenceSerializer < ActiveModel::Serializer
      attributes :id, :present, :late, :date, :student_id
    end
  end
