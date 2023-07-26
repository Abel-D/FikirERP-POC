import http from "../../../_helpers/http-common";

class ProductService {
 
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {debugger;
    return http.post("/products/create", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

 
}
export default new ProductService();