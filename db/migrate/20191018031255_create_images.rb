class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :group
      t.string :fileimg

      t.timestamps
    end
  end
end
