const products = [
  {
    id: 0,
    name: "Core I3 10100",
    brand: "Intel",
    category: "Procesadores",
    price: 70000,
    stock: 21,
    description:
      "3.60 Ghz (Comet Lake) Cuatro Núcleos, Socket LGA 1200, 6 MB SmartCache, Gráficos integrados UHD 630",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/Intel-Core-i3-10100-a-3.60-Ghz-Comet-Lake-Cuatro-Nucleos-Socket-LGA-1200-6-MB-SmartCache-Graficos-integrados-UHD-630_Intel_410_1.jpeg",
  },
  {
    id: 1,
    name: "Core I3 13100",
    brand: "Intel",
    category: "Procesadores",
    price: 90000,
    stock: 21,
    description:
      "Cuatro Núcleos a 3.40GHz, Raptor Lake, Socket LGA 1700, 12MB SmartCache, Gráficos Intel UHD 730, Intel Turbo Boost 4.50GHz",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/Procesador-Intel-Core-i3-13100-Cuatro-Nucleos-a-3.40GHz-Raptor-Lake-Socket-LGA-1700-12MB-SmartCache-Graficos-Intel-UHD-730-Intel-Turbo-Boost-4.50GHz_Intel_9667_1.jpeg",
  },
  {
    id: 2,
    name: "Core I5 11400f",
    brand: "Intel",
    category: "Procesadores",
    price: 110000,
    stock: 21,
    description:
      "Procesador de Seis Núcleos a 2,60GHz, Rocket Lake, Socket LGA 1200, 12MB SmartCache, Sin Gráficos, Intel Turbo Boost 4,40GHz",
    image:
      "https//yoytec.com/wp-content/uploads/2023/09/Intel-Core-i5-11400F-Procesador-de-Seis-Nucleos-a-260GHz-Rocket-Lake-Socket-LGA-1200-12MB-SmartCache-Sin-Graficos-Intel-Turbo-Boost-440GHz_Intel_7028_1.jpeg",
  },

  {
    id: 3,
    name: "Core I7 12700k",
    brand: "Intel",
    price: 145000,
    category: "Procesadores",
    stock: 21,
    description:
      "Procesador de Doce Núcleos a 2.70GHz, Alder Lake, Socket LGA 1700, 25MB SmartCache, Gráficos Intel UHD 770, Intel Turbo Boost 5.00GHz",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/Intel-Core-i7-12700K-Procesador-de-Doce-Nucleos-a-2.70GHz-Alder-Lake-Socket-LGA-1700-25MB-SmartCache-Graficos-Intel-UHD-770-Intel-Turbo-Boost-5.00GHz_Intel_7074_1.jpeg",
  },
  {
    id: 4,
    name: "Core I7 13700kf",
    brand: "Intel",
    category: "Procesadores",
    stock: 21,
    price: 157850,
    description:
      "Procesador de Dieciséis Núcleos a 2.50GHz, Raptor Lake, Socket LGA 1700, 30MB SmartCache,Sin Gráficos Intel UHD 770, Intel Turbo Boost 5.40GHz",
    image:
      "https://yoytec.com/wp-content/uploads/2023/09/Intel-Core-i7-13700KF-Procesador-de-Dieciseis-Nucleos-a-2.50GHz-Raptor-Lake-Socket-LGA-1700-30MB-SmartCacheSin-Graficos-Intel-UHD-770-Intel-Turbo-Boost-5.40GHz_Intel_10036_1.jpeg/",
  },
  {
    id: 5,
    name: "Core I9 11900",
    brand: "Intel",
    category: "Procesadores",
    stock: 21,
    price: 239999,
    description:
      "Micro Procesador de Ocho Núcleos a 2.50Ghz, Rocket Lake, Socket LGA 1200, 16MB SmartCache, Intel UHD Graphics 750, Intel Turbo Boost 5.10GHz",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/Intel-Core-i9-11900-Micro-Procesador-de-Ocho-Nucleos-a-2.50Ghz-Rocket-Lake-Socket-LGA-1200-16MB-SmartCache-Intel-UHD-Graphics-750-Intel-Turbo-Boost-5.10GHz_Intel_9167_1.jpeg",
  },
  {
    id: 6,
    name: "Ryzen 7 5700g",
    brand: "Amd",
    category: "Procesadores",
    stock: 21,
    price: 198999,
    description:
      "AMD Ryzen 7 5700G Procesador de Ocho Núcleos a 3.8GHz, Socket AM4, TSMC 7nm FinFET, Gráfico Radeon, 16MB Caché, 4.6GHz Turbo",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/AMD-Ryzen-7-5700G-Procesador-de-Ocho-Nucleos-a-3.8GHz-Socket-AM4-TSMC-7nm-FinFET-Grafico-Radeon-16MB-Cache-4.6GHz-Turbo_Amd_4378_1.jpeg",
  },
  {
    id: 7,
    name: "Ryzen 7 5800x",
    brand: "Amd",
    category: "Procesadores",
    price: 202000,
    stock: 21,
    description:
      "AMD Ryzen 7 5800X 8 Núcleos a 3.8GHz, Socket AM4, 7nm FinFET, 105W, 4MB L2 Caché, 4.7GHz Turbo, Soporta DDR4",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/AMD-Ryzen-7-5800X-8-Nucleos-a-3.8GHz-Socket-AM4-7nm-FinFET-105W-4MB-L2-Cache-4.7GHz-Turbo-Soporta-DDR4-Desbloqueado_Amd_4374_1.jpeg",
  },
  {
    id: 8,
    name: "Ryzen 7 7600x",
    brand: "Amd",
    category: "Procesadores",
    price: 250000,
    stock: 21,
    description:
      "AMD Ryzen 5 7600X  6 Núcleos a 4.7GHz, Socket AM5, 105W, 6MB L2 Caché, 5.3GHz Turbo, Soporta DDR5",
    image:
      "https://yoytec.com/wp-content/uploads/2023/08/AMD-Ryzen-5-7600X-6-Nucleos-a-4.7GHz-Socket-AM5-105W-6MB-L2-Cache-5.3GHz-Turbo-Soporta-DDR5-Desbloqueado_Amd_9575_1.jpeg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(products);
      const product = products.find((prod) => prod.id === id);
      console.log("product", typeof id, id);
      resolve(product);
    }, 100);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsByCategory = products.filter(
        (prod) => prod.category === category
      );
      resolve(productsByCategory);
    });
  });
};
