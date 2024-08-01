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
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const normalizeName = (name) => name.replace(/[\.,]/g, "").trim().toLowerCase();

const BossSearch = () => {
  const [bosses, setBosses] = useState([]);
  const [filteredBosses, setFilteredBosses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [sortOrder, setSortOrder] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const bossesPerPage = 50;

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const response = await fetch("https://eldenring.fanapis.com/api/bosses");
        const data = await response.json();
        setBosses(data.data);
        setFilteredBosses(data.data);
      } catch (error) {
        console.error("Error fetching bosses:", error);
      }
    };

    fetchBosses();
  }, []);

  useEffect(() => {
    const queryWords = searchQuery.toLowerCase().split(" ").filter(Boolean);
    const filtered = bosses.filter((boss) =>
      queryWords.every((word) => boss.name.toLowerCase().includes(word))
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredBosses(filtered);
    setCurrentPage(1);
  }, [searchQuery, bosses, sortOrder]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const indexOfLastBoss = currentPage * bossesPerPage;
  const indexOfFirstBoss = indexOfLastBoss - bossesPerPage;
  const currentBosses = filteredBosses.slice(indexOfFirstBoss, indexOfLastBoss);

  return (
    <div className="boss-search-container">
      <TextField
        label="Search Bosses"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <FormControl fullWidth className="sort-control">
        <InputLabel>Sort Order</InputLabel>
        <Select value={sortOrder} onChange={handleSortChange}>
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="asc">A to Z</MenuItem>
          <MenuItem value="desc">Z to A</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2} className="boss-grid">
        {currentBosses.map((boss) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={boss.id}>
            <Card className="boss-card" onClick={() => setSelectedBoss(boss)}>
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
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredBosses.length / bossesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        className="pagination"
      />

      <Dialog
        open={Boolean(selectedBoss)}
        onClose={() => setSelectedBoss(null)}
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
                  {selectedBoss.location}
                </Typography>
              </div>
              <div className="dialog-item">
                <HealthAndSafetyIcon className="dialog-item-icon" />
                <Typography variant="body1" className="dialog-item-text">
                  {selectedBoss.healthPoints}
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
                onClick={() => setSelectedBoss(null)}
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
