class CreateTcfs < ActiveRecord::Migration[5.2]
  def change
    create_table :tcfs do |t|
      t.string :name
      t.integer :cohort_id

      t.timestamps
    end
  end
end
