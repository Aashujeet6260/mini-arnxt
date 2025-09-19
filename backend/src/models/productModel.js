import pool from '../config/db.js';

const productModel = {
  findAll: async () => {
    const query = 'SELECT id, name, image_url, category, price FROM products ORDER BY id ASC';
    const { rows } = await pool.query(query);
    return rows;
  },

  findById: async (id) => {
    const query = 'SELECT * FROM products WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

export default productModel;