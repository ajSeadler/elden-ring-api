// src/BossSearch.js

import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { FaCrutch } from "react-icons/fa";
import bossData from "./bossData"; // Import the data

const normalizeName = (name) => name.replace(/[\.,]/g, "").trim().toLowerCase();

const BossSearch = () => {
  const [filteredBosses, setFilteredBosses] = useState(bossData); // Initialize with bossData
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBoss, setSelectedBoss] = useState(null);

  useEffect(() => {
    // If you want to filter based on the search query
    const queryWords = searchQuery.toLowerCase().split(" ").filter(Boolean);
    const filtered = bossData.filter((boss) =>
      queryWords.every((word) => boss.name.toLowerCase().includes(word))
    );

    setFilteredBosses(filtered);
  }, [searchQuery]);

  const handleCardClick = (boss) => {
    setSelectedBoss(boss);
  };

  const handleClose = () => {
    setSelectedBoss(null);
  };

  return (
    <div className="boss-search-container">
      <TextField
        label="Search baby back bitches"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <Typography
        variant="body2"
        className="boss-card-description"
        style={{ marginBottom: "3%" }}
      >
        Click a boss card for more info
      </Typography>

      <Grid container spacing={2} className="boss-grid">
        {filteredBosses.length > 0 ? (
          filteredBosses.map((boss) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={boss.id}>
              <Card className="boss-card" onClick={() => handleCardClick(boss)}>
                <CardMedia
                  component="img"
                  image={boss.image}
                  alt={boss.name}
                  className="boss-card-media"
                />
                <CardContent className="boss-card-content">
                  <Typography
                    variant="h5"
                    gutterBottom
                    className="boss-card-title"
                  >
                    {boss.name}
                  </Typography>
                  <Typography variant="body2" className="boss-card-description">
                    {boss.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" style={{ width: "100%" }}>
            No bosses found
          </Typography>
        )}
      </Grid>

      <Dialog
        open={Boolean(selectedBoss)}
        onClose={handleClose}
        classes={{ paper: "dialog-paper" }}
        maxWidth="md"
        fullWidth
      >
        {selectedBoss && (
          <>
            <DialogTitle className="dialog-title">
              {selectedBoss.name}
            </DialogTitle>
            <DialogContent className="dialog-content">
              <img
                src={selectedBoss.image}
                alt={selectedBoss.name}
                className="dialog-image"
              />
              <Typography variant="body2" className="dialog-description">
                {selectedBoss.description}
              </Typography>
              <div className="dialog-item">
                <LocationOnIcon className="dialog-item-icon" />
                <Typography variant="body1" className="dialog-item-text">
                  {selectedBoss.region}, {selectedBoss.location}
                </Typography>
              </div>
              <div className="dialog-item">
                <HealthAndSafetyIcon className="dialog-item-icon" />
                <Typography variant="body1" className="dialog-item-text">
                  {selectedBoss.healthPoints}
                </Typography>
              </div>
              <div className="dialog-item">
                <Typography variant="body1" className="dialog-item-text">
                  <FaCrutch className="dialog-item-icon" />
                  {selectedBoss.weakness}
                </Typography>
              </div>
              <div className="dialog-item">
                <Inventory2Icon className="dialog-item-icon" />
                <Typography variant="body1" className="dialog-item-text">
                  {selectedBoss.drops.join(", ")}
                </Typography>
              </div>
            </DialogContent>
            <DialogActions className="dialog-actions">
              <Button
                onClick={handleClose}
                color="primary"
                className="dialog-close-button"
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default BossSearch;
