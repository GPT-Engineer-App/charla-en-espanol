import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Game player 1",
    sku: "YLW X6 Game Player Pantalla de cuatro pulgadas Consola de videojuegos portátil de 128 bits Real 8GB para PSP Video E-book Tamaño de pantalla: 4 Pantalla táctil: No Color: Black",
    internetPrice: 249,
    discountPercent: 20,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Game player 2",
    sku: "YLW X6 Game Player Pantalla de cuatro pulgadas Consola de videojuegos portátil de 128 bits Real 8GB para PSP Video E-book Tamaño de pantalla: 4 Pantalla táctil: No Color: White",
    internetPrice: 249,
    discountPercent: 20,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Game player 3",
    sku: "YLW X6 Game Player Pantalla de cuatro pulgadas Consola de videojuegos portátil de 128 bits Real 8GB para PSP Video E-book Tamaño de pantalla: 4 Pantalla táctil: No Color: Blue",
    internetPrice: 249,
    discountPercent: 20,
    image: "/placeholder.svg",
  },
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectImage = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Product Gallery</h1>
      <div className="images-container grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto object-cover w-full h-[200px] cursor-pointer hover:opacity-75 transition-opacity duration-200 ease-in-out"
              onClick={() => selectImage(product)}
            />
            <p className="mt-2">Precio: <span className="text-lg font-bold">S/. {product.internetPrice}</span></p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
          <DialogContent className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto transform transition-transform duration-300 ease-in-out">
            <DialogHeader>
              <DialogTitle id="product-name" className="text-2xl font-bold mb-2">{selectedProduct.name}</DialogTitle>
            <DialogDescription id="product-sku" className="text-sm text-gray-500 mb-4">SKU: {selectedProduct.sku}</DialogDescription>
            </DialogHeader>
            <div id="product-details" className="mt-4 space-y-2">
              <p id="internet-price" className="text-lg font-semibold">Internet: S/ {selectedProduct.internetPrice.toFixed(2)}</p>
              <p id="discount" className="text-red-500 font-semibold">- {selectedProduct.discountPercent}%</p>
              <p id="product-description" className="mt-2 text-gray-700">Descripción del {selectedProduct.name}</p>
              <p className="mt-2">Precio Original: S/ <span id="product-price" className="line-through text-gray-500">{(selectedProduct.internetPrice / (1 - selectedProduct.discountPercent / 100)).toFixed(2)}</span></p>
              <p className="mt-2">Precio con Descuento: S/ <span id="discount-price" className="font-bold text-green-600">{selectedProduct.internetPrice.toFixed(2)}</span></p>
            </div>
            <Button onClick={closeModal} className="mt-4 hover:bg-gray-300 transition-colors duration-200 ease-in-out">Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;