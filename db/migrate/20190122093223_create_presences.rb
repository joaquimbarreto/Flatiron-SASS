class CreatePresences < ActiveRecord::Migration[5.2]
  def change
    create_table :presences do |t|
      t.boolean :present
      t.datetime :late
      t.date :date
      t.integer :student_id

      t.timestamps
    end
  end
end
