const products = [
  {
    ID: "1",
    name: "Device",
    expanded: true
  },
  {
    ID: "1_1",
    categoryId: "1",
    name: "Session-NYSE",
    expanded: true
  },
  {
    ID: "1_1_1",
    categoryId: "1_1",
    name: "ABC"
  },
  {
    ID: "1_1_1_1",
    categoryId: "1_1_1",
    name: "HD Video Player",
    price: 220
  },
  {
    ID: "1_1_1_2",
    categoryId: "1_1_1",
    name: "SuperHD Video Player",
    price: 270
  }
];

export default {
  getProducts() {
    return products;
  }
};
