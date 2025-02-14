import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import { getUserLayout } from "@/components/layout/UserLayout";

import {
  Stack,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

const Home = () => {
  const [googleMap, setGoogleMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const apiKey = "AIzaSyCqaNzlb7sW2j3Bskt5KvxZqlc6boL6m34";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = () => {
      const map = new window.google.maps.Map(
        document.getElementById("google-map-iframe"),
        {
          center: { lat: 47.9123970797613, lng: 106.90358506202938 },
          zoom: 14,
        }
      );
      setGoogleMap(map);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      window.initMap = undefined;
    };
  }, [apiKey]);

  const handleCityClick = (
    coordinates: { lat: number; lng: number },
    city: string
  ) => {
    if (googleMap) {
      const location = new window.google.maps.LatLng(
        coordinates.lat,
        coordinates.lng
      );
      googleMap.setCenter(location);
      googleMap.setZoom(20);
      if (marker) {
        marker.setMap(null);
      }
      const newMarker = new window.google.maps.Marker({
        position: location,
        map: googleMap,
        title: city,
      });
      setMarker(newMarker);
    }
  };

  const cityA1List: {
    name: string;
    coordinates: { lat: number; lng: number };
  }[] = [
    {
      name: "Pinecone Academy",
      coordinates: { lat: 47.91431553133167, lng: 106.91669029573035 },
    },
    {
      name: "Blue Sky",
      coordinates: { lat: 47.91637164076142, lng: 106.91868116527576 },
    },
    {
      name: "Sukhbaatar Square",
      coordinates: { lat: 47.918845341035414, lng: 106.91756313061431 },
    },
    {
      name: "Ulaanbaatar Department Store",
      coordinates: { lat: 47.91524796024097, lng: 106.9016628598821 },
    },
    {
      name: "Ambassador of France",
      coordinates: { lat: 47.91725589496809, lng: 106.91354596325525 },
    },
    {
      name: "220K Residence",
      coordinates: { lat: 47.913527486698015, lng: 106.91201173978828 },
    },
    {
      name: "Kempinski Hotel",
      coordinates: { lat: 47.91985921001836, lng: 106.94367509310176 },
    },
  ];
  const cityA2List: {
    name: string;
    coordinates: { lat: number; lng: number };
  }[] = [
    {
      name: "Shangri-La Mall",
      coordinates: { lat: 47.91365015361143, lng: 106.92152675221618 },
    },
    {
      name: "Embassy of Bulgaria",
      coordinates: { lat: 47.913761614012756, lng: 106.92318972183458 },
    },
    {
      name: "Central Tower",
      coordinates: { lat: 47.91813175063737, lng: 106.91970821452117 },
    },
    {
      name: "Galleria Ulaanbaatar",
      coordinates: { lat: 47.92043764432561, lng: 106.9190543032357 },
    },
    {
      name: "Continental Hotel",
      coordinates: { lat: 47.91253337022719, lng: 106.92471376356602 },
    },
    {
      name: "Corporate Hotel",
      coordinates: { lat: 47.91311225502274, lng: 106.91399029194999 },
    },
    {
      name: "Russian Ambassador",
      coordinates: { lat: 47.91577647985592, lng: 106.90997770716386 },
    },
  ];
  const cityB1List: {
    name: string;
    coordinates: { lat: number; lng: number };
  }[] = [
    {
      name: "Maxmall ",
      coordinates: { lat: 47.91571978127101, lng: 106.89184912993268 },
    },
    {
      name: "Grand Plaza",
      coordinates: { lat: 47.914536895483614, lng: 106.89066359355311 },
    },
    {
      name: "Kyokushu Tower",
      coordinates: { lat: 47.914852757442965, lng: 106.87603303035523 },
    },
    {
      name: "E-Mart Khan-Uul",
      coordinates: { lat: 47.9003075380988, lng: 106.92858525654782 },
    },
    {
      name: "Ikh Mongol Residence",
      coordinates: { lat: 47.905594016235696, lng: 106.94215186976122 },
    },
    {
      name: "Gegeenten Cinema",
      coordinates: { lat: 47.89712999687847, lng: 106.90871545223571 },
    },
    {
      name: "Bella Vista",
      coordinates: { lat: 47.88799414958712, lng: 106.91135881830525 },
    },
  ];
  const cityB2List: {
    name: string;
    coordinates: { lat: number; lng: number };
  }[] = [
    {
      name: "River Tower",
      coordinates: { lat: 47.88976090394264, lng: 106.93248668487281 },
    },
    {
      name: "Hunnu2222",
      coordinates: { lat: 47.89672813399016, lng: 106.92603865449557 },
    },
    {
      name: "Tokyo Town",
      coordinates: { lat: 47.898767409045696, lng: 106.92342081850444 },
    },
    {
      name: "Home Plaza",
      coordinates: { lat: 47.90433431397989, lng: 106.92748025496273 },
    },
    {
      name: "Mandala Residence",
      coordinates: { lat: 47.902005543941605, lng: 106.93268365530226 },
    },
    {
      name: "Chinggis Khan Hotel",
      coordinates: { lat: 47.92209899577149, lng: 106.93377459691885 },
    },
    {
      name: "Embassy of China",
      coordinates: { lat: 47.92359445803668, lng: 106.92416155984347 },
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: "40px",
        }}
      >
        <div
          id="google-map-iframe"
          style={{ width: "1200px", height: "616px" }}
        ></div>
      </Box>
      <Box sx={{ width: "55%", marginBottom: "100px", marginTop: "50px" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
          sx={{
            textAlign: "center",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
              fill="#18BA51"
            />
          </svg>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Хүргэлтийн бүс дэх хаягууд
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "1200px",
            display: "flex",
            justifyContent: "center",
            gap: "150px",
          }}
        >
          <Stack
            width={"40%"}
            alignItems={"start"}
            justifyContent={"start"}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              А бүс
            </Typography>
            <Divider sx={{ my: 2, width: "100%", bgcolor: "#18BA51" }} />

            <Box sx={{ display: "flex", gap: "100px", flexDirection: "row" }}>
              <List component="nav">
                {cityA1List.map((city, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleCityClick(city.coordinates, city.name)}
                  >
                    <ListItemText primary={city.name} />
                  </ListItem>
                ))}
              </List>
              <List component="nav">
                {cityA2List.map((city, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleCityClick(city.coordinates, city.name)}
                  >
                    <ListItemText primary={city.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
          <Stack
            width={"40%"}
            alignItems={"start"}
            justifyContent={"start"}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Б бүс
            </Typography>
            <Divider sx={{ my: 2, width: "100%", bgcolor: "#18BA51" }} />
            <Box sx={{ display: "flex", gap: "100px", flexDirection: "row" }}>
              <List component="nav">
                {cityB1List.map((city, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleCityClick(city.coordinates, city.name)}
                  >
                    <ListItemText primary={city.name} />
                  </ListItem>
                ))}
              </List>
              <List component="nav">
                {cityB2List.map((city, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleCityClick(city.coordinates, city.name)}
                  >
                    <ListItemText primary={city.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
Home.getLayout = getUserLayout;

export default Home;
