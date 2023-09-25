import express from "express";
import sqlite3, { Database } from 'sqlite3';
import "reflect-metadata";
import { dataSource } from "./config/db";
import { Ad } from "./entities/ad";
import { Category } from "./entities/category";

const db = new sqlite3.Database('good_corner.sqlite');
const app = express();
const port = 3000;
app.use(express.json());
db.get("PRAGMA foreign_keys = ON;");

// LANCEMENT DU SERVEUR 
app.listen(port, async () => {
  await dataSource.initialize();
  console.log("Server started! 🚀");
});

// CRUD CATEGORY 

// METHODE GET
app.get('/category', async (req, res) => {
  try {
    const category = await Category.find(); // Utilisez la méthode statique "find" directement sur votre entité Ad pour récupérer toutes les annonces

    res.status(200).json(category);
  } catch (error: any) {
      console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
    }
  });

// METHODE GET ONE 
app.get('/category/:id', async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { id: Number(req.params.id) },
    });
    res.send(category);
  } catch (error: any) {
    console.error(error.message);
  res.status(500).json({ error: 'Erreur lors de la récupération de la catégorie' });
  }
});

// METHODE POST
app.post("/category", async (req, res) => {
  try {
    const category = new Category();
    category.name = req.body.name;

    await category.save();

    res.status(200).json(category);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la création de la catégorie' });
    }
});

// METHODE PUT
app.put("/category/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const category = await Category.findOneBy({ id })
    if (category !== null) {
      category.name = req.body.name;;

      await category.save();
    }
    res.status(200).json(category);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la création de la catégorie' });
    }
});  

// METHODE DELETE
app.delete("/category/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await Category.delete({ id });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la suppression de la catégorie' });
  }
});

// CRUD AD

// METHODE GET ALL
app.get('/ads', async (req, res) => {
  try {
    const ads = await Ad.find(); // Utilisez la méthode statique "find" directement sur votre entité Ad pour récupérer toutes les annonces

    res.status(200).json(ads);
  } catch (error: any) {
      console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des annonces' });
    }
  });

// METHODE GET ONE 
app.get("/ads/:id", async (req, res) => {
  try {
    const ad = await Ad.findOne({ where: { id: Number(req.params.id) } });
    res.send(ad);
  } catch (error: any) {
    console.error(error.message);
  res.status(500).json({ error: 'Erreur lors de la récupération de  l\'annonce' });
  }
});

// METHODE POST
app.post("/ads", async (req, res) => {
  try {
    const ad = new Ad();
    ad.title = req.body.title;
    ad.description = req.body.description;
    ad.owner = req.body.owner;
    ad.price = req.body.price;
    ad.createdAt = req.body.createdAt;
    ad.imageUrl = req.body.imageUrl;
    ad.city = req.body.city;
    ad.category = req.body.category;
    ad.tags = req.body.tags;

    await ad.save();

    res.status(200).json(ad);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la création de l\'annonce' });
    }
});

// METHODE PUT
app.put("/ads/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const ad = await Ad.findOneBy({ id })
    if (ad !== null) {
      ad.title = req.body.title;
      ad.description = req.body.description;
      ad.owner = req.body.owner;
      ad.price = req.body.price;
      ad.createdAt = req.body.createdAt;
      ad.imageUrl = req.body.imageUrl;
      ad.city = req.body.city;
      // ad.category = { id:req.body.categoryId } as unknown as Category;
      ad.category = req.body.category;
      ad.tags = req.body.tags;

      await ad.save();
    }
    res.status(200).json(ad);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la création de l\'annonce' });
    }
});  

// METHODE DELETE
app.delete("/ads/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await Ad.delete({ id });

    res.status(200).send('L\'annonce a bien été supprimée');
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la création de l\'annonce' });
    }
});

// CRUD TAG

// METHODE GET TAG

