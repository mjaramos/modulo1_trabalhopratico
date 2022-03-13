import express from 'express';
import { promises as fs } from 'fs';

const { readFile } = fs;

const router = express.Router();

async function retornaNovaLista(req, data) {
  let marca = req.body;
  let resultado = [];

  for (let b of data) {
    marca = {
      marca: b.brand,
      modelos: b.models,
      qtdModelos: b.models.length,
    };
    resultado.push(marca);
  }

  return resultado;
}

router.get('/maisModelos', async (req, res) => {
  try {
    let resultado = '';
    let marca = '';
    let novoDado = [];

    const data = JSON.parse(await readFile(fileName));

    for (let b of data) {
      marca = {
        marca: b.brand,
        modelos: b.models,
        qtdModelos: b.models.length,
      };
      novoDado.push(marca);
    }

    novoDado.sort((a, b) => {
      if (a.qtdModelos > b.qtdModelos) {
        return -1;
      } else {
        if (a.qtdModelos < b.qtdModelos) {
          return 1;
        } else {
          if (a.marca > b.marca) {
            return 1;
          } else {
            if (a.marca < b.marca) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    });

    resultado = novoDado[0];

    res.send(resultado);
  } catch (err) {
    console.log(err);
  }
});

router.get('/menosModelos', async (req, res) => {
  try {
    let resultado = '';
    let marca = '';
    let novoDado = [];

    const data = JSON.parse(await readFile(fileName));

    for (let b of data) {
      marca = {
        marca: b.brand,
        modelos: b.models,
        qtdModelos: b.models.length,
      };
      novoDado.push(marca);
    }

    novoDado.sort((a, b) => {
      if (a.qtdModelos > b.qtdModelos) {
        return 1;
      } else {
        if (a.qtdModelos < b.qtdModelos) {
          return -1;
        } else {
          if (a.marca > b.marca) {
            return 1;
          } else {
            if (a.marca < b.marca) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    });

    resultado = novoDado[0];

    res.send(resultado);
  } catch (err) {
    console.log(err);
  }
});

router.get('/listaMaisModelos/:qtd', async (req, res) => {
  try {
    let resultado = [];
    let marca = '';
    let novoDado = [];

    const data = JSON.parse(await readFile(fileName));

    for (let b of data) {
      marca = {
        marca: b.brand,
        qtdModelos: b.models.length,
      };
      novoDado.push(marca);
    }

    novoDado.sort((a, b) => {
      if (a.qtdModelos > b.qtdModelos) {
        return -1;
      } else {
        if (a.qtdModelos < b.qtdModelos) {
          return 1;
        } else {
          if (a.marca > b.marca) {
            return 1;
          } else {
            if (a.marca < b.marca) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    });

    let qtd = parseInt(req.params.qtd);

    for (let i = 0; i < qtd; i++) {
      resultado.push(novoDado[i]);
    }

    res.send(resultado);
  } catch (err) {
    console.log(err);
  }
});

router.get('/listaMenosModelos/:qtd', async (req, res) => {
  try {
    let resultado = [];
    let marca = '';
    let novoDado = [];

    const data = JSON.parse(await readFile(fileName));

    for (let b of data) {
      marca = {
        marca: b.brand,
        qtdModelos: b.models.length,
      };
      novoDado.push(marca);
    }

    novoDado.sort((a, b) => {
      if (a.qtdModelos > b.qtdModelos) {
        return 1;
      } else {
        if (a.qtdModelos < b.qtdModelos) {
          return -1;
        } else {
          if (a.marca > b.marca) {
            return 1;
          } else {
            if (a.marca < b.marca) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    });

    let qtd = parseInt(req.params.qtd);

    for (let i = 0; i < qtd; i++) {
      resultado.push(novoDado[i]);
    }

    res.send(resultado);
  } catch (err) {
    console.log(err);
  }
});

router.post('/listaModelos', async (req, res) => {
  try {
    let cars = req.body;
    let marca = cars.marca;
    let marcas = '';
    let novoDado = [];

    const data = JSON.parse(await readFile(fileName));

    for (let b of data) {
      marcas = {
        marca: b.brand,
        modelos: b.models,
      };
      novoDado.push(marcas);
    }

    const resultado = novoDado.filter(
      a => a.marca.toUpperCase() === marca.toUpperCase()
    );

    res.send(resultado);
  } catch (err) {}
});

export default router;
