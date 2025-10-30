import React, { useEffect, useRef, useState } from "react";

// GeoJSON data for historical locations with images and detailed content
const geoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Cánh đồng Chuôm (Phù Lỗ, Sóc Sơn)",
        description:
          "Cánh đồng Chuôm, Phù Lỗ (Sóc Sơn) — vùng liên quan đến các di tích hạ B-52.",
        image:
          "https://quocphongthudo.com.vn/upload/2001606/20200730/093cea7a133a65dbcbb7583c90dc586810_copy.jpg",
        detailedContent:
          "Cánh đồng Chuôm tại Phù Lỗ, Sóc Sơn là một trong những địa điểm lịch sử quan trọng trong chiến dịch Điện Biên Phủ trên không. Đây là nơi ghi dấu những trận đánh anh dũng của quân dân ta trong việc bảo vệ bầu trời Thủ đô. Nhiều mảnh vỡ B-52 đã rơi xuống khu vực này, trở thành minh chứng lịch sử sống động.",
        date: "19-29/12/1972",
      },
      geometry: { type: "Point", coordinates: [105.85, 21.2] },
    },
    {
      type: "Feature",
      properties: {
        name: "Yên Viên (Ga Yên Viên)",
        description: "Khu Yên Viên, ga đường sắt, Gia Lâm.",
        image:
          "https://cdn.petrotimes.vn/stores/news_dataimages/minhquan/122012/11/15/Ga-yv-1.jpg",
        detailedContent:
          "Ga Yên Viên là một mục tiêu chiến lược quan trọng trong chiến dịch ném bom của Mỹ. Là cửa ngõ giao thông đường sắt phía Bắc của Hà Nội, ga Yên Viên đã chịu nhiều đợt không kích dữ dội nhưng vẫn kiên cường hoạt động, đảm bảo huyết mạch giao thông cho Thủ đô.",
        date: "18-29/12/1972",
      },
      geometry: { type: "Point", coordinates: [105.9162, 21.0854] },
    },
    {
      type: "Feature",
      properties: {
        name: "Hồ Hữu Tiệp (Xác máy bay B-52)",
        description: "Hồ Hữu Tiệp (Ngọc Hà, Ba Đình) — vị trí xác B-52 bị hạ.",
        image:
          "https://cand.com.vn/Files/Image/chienthang/2017/04/27/25476afb-b3f6-4a6a-9c0b-963ae633d040.JPG",
        detailedContent:
          "Hồ Hữu Tiệp là địa điểm lưu giữ phần thân máy bay B-52 bị bắn rơi trong đêm 27/12/1972. Đây là một trong những biểu tượng nổi bật nhất của chiến thắng Điện Biên Phủ trên không. Xác máy bay được bảo tồn nguyên vẹn, là điểm đến của nhiều du khách trong và ngoài nước muốn tìm hiểu về lịch sử vẻ vang này.",
        date: "27/12/1972",
      },
      geometry: { type: "Point", coordinates: [105.8271028, 21.0379083] },
    },
    {
      type: "Feature",
      properties: {
        name: "Bảo tàng Lịch sử Quân sự Việt Nam",
        description:
          "Bảo tàng (tham chiếu cũ ở Điện Biên Phủ; hiện có cơ sở mới trên Đại lộ Thăng Long).",
        image:
          "https://cdn.tuoitre.vn/471584752817336320/2024/10/3/bao-tang-quan-su-viet-nam2-1727962530914503567884.jpg",
        detailedContent:
          "Bảo tàng Lịch sử Quân sự Việt Nam lưu giữ nhiều hiện vật quý giá liên quan đến chiến dịch 12 ngày đêm, bao gồm các mảnh vỡ B-52, tên lửa SAM, và nhiều tài liệu lịch sử khác. Đây là nơi lý tưởng để tìm hiểu chi tiết về chiến dịch Điện Biên Phủ trên không và lịch sử quân sự Việt Nam.",
        date: "Mở cửa thường xuyên",
      },
      geometry: { type: "Point", coordinates: [105.835, 21.028] },
    },
    {
      type: "Feature",
      properties: {
        name: "Phố Khâm Thiên",
        description: "Khu vực Phố Khâm Thiên, Đống Đa.",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.W6x9c2vuiABeWJ52rEO7EgHaFm?rs=1&pid=ImgDetMain&o=7&rm=3",
        detailedContent:
          "Phố Khâm Thiên là một trong những khu phố chịu thiệt hại nặng nề nhất trong chiến dịch ném bom. Đêm 26/12/1972, hàng chục ngôi nhà bị phá hủy, nhiều người dân thương vong. Sự kiện này đã gây chấn động dư luận thế giới và cho thấy bản chất tàn bạo của cuộc chiến tranh. Ngày nay, khu vực này đã được tái thiết nhưng vẫn lưu giữ những dấu tích lịch sử.",
        date: "26/12/1972",
      },
      geometry: { type: "Point", coordinates: [105.8342, 21.0186] },
    },
    {
      type: "Feature",
      properties: {
        name: "Bệnh viện Bạch Mai",
        description: "Bệnh viện Bạch Mai, Giải Phóng / Phương Mai.",
        image:
          "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/12/23/6_benh_vien_bach_mai_bi_may_bay-1671765411045.jpeg",
        detailedContent:
          "Bệnh viện Bạch Mai bị ném bom trong đêm 19-20/12/1972, gây ra thương vong cho nhiều bệnh nhân và nhân viên y tế. Vụ tấn công này đã vi phạm nghiêm trọng luật chiến tranh quốc tế và bị lên án mạnh mẽ. Bệnh viện Bạch Mai là biểu tượng của sự tàn bạo trong chiến tranh nhưng cũng là minh chứng cho ý chí bất khuất của nhân dân Việt Nam.",
        date: "19-20/12/1972",
      },
      geometry: { type: "Point", coordinates: [105.839, 21.0018] },
    },
  ],
};

// Since Leaflet is loaded from a script, we declare its global variable `L` for TypeScript.
declare var L: any;

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // To hold the map instance and prevent re-initialization

  useEffect(() => {
    // Check if the Leaflet library is loaded and if the map has not been initialized yet.
    if (mapRef.current && !mapInstanceRef.current && typeof L !== "undefined") {
      // Initialize the map and set its view to Hanoi's coordinates
      const map = L.map(mapRef.current).setView([21.03, 105.84], 12);
      mapInstanceRef.current = map;

      // Add a dark-themed tile layer from CartoDB for a visually consistent experience
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      // Define a custom icon for the markers to match the site's amber color scheme
      const customIcon = L.divIcon({
        className: "custom-div-icon", // This class is for potential custom CSS, though not used here
        html: `<div style="background-color:#f59e0b; width:16px; height:16px; border-radius:50%; border: 2px solid #ffffff; box-shadow: 0 0 8px #f59e0b;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      // Iterate over the GeoJSON data to create and add markers to the map
      geoJsonData.features.forEach((feature) => {
        // Leaflet expects [lat, lng], while GeoJSON has [lng, lat]
        const [lng, lat] = feature.geometry.coordinates;
        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

        // Create the HTML content for the popup with image and detailed content
        const content = `
            <div style="max-width: 320px; font-family: system-ui, -apple-system, sans-serif;">
              <div style="margin-bottom: 12px; border-radius: 8px; overflow: hidden; border: 2px solid #f59e0b;">
                <img 
                  src="${feature.properties.image}" 
                  alt="${feature.properties.name}"
                  style="width: 100%; height: 180px; object-fit: cover; display: block;"
                  onerror="this.style.display='none'"
                />
              </div>
              <h3 style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #f59e0b; line-height: 1.3;">
                ${feature.properties.name}
              </h3>
              <div style="background-color: rgba(251, 191, 36, 0.1); padding: 6px 10px; border-radius: 6px; margin-bottom: 10px; border-left: 3px solid #f59e0b;">
                <p style="font-size: 12px; color: #fbbf24; margin: 0; font-weight: 600;">
                  📅 ${feature.properties.date}
                </p>
              </div>
              <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6; margin-bottom: 10px;">
                ${feature.properties.detailedContent}
              </p>
              <div style="border-top: 1px solid #475569; padding-top: 8px; margin-top: 8px;">
                <p style="font-size: 12px; color: #94a3b8; font-style: italic; margin: 0;">
                  ${feature.properties.description}
                </p>
              </div>
            </div>
        `;

        // Bind the popup to the marker with custom options
        marker.bindPopup(content, {
          maxWidth: 350,
          minWidth: 300,
          className: "custom-popup",
        });
      });
    }
  }, []);

  return (
    <div className="glass-effect p-6 rounded-2xl shadow-2xl border border-slate-700/50">
      <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-3xl">🗺️</span>
            Bản đồ Tương tác
          </h3>
          <p className="text-slate-400 mt-1">
            Nhấn vào các địa điểm để xem chi tiết
          </p>
        </div>
        <div className="badge">📍 {geoJsonData.features.length} Địa điểm</div>
      </div>
      <div
        ref={mapRef}
        style={{ height: "65vh", minHeight: "550px" }}
        className="w-full rounded-xl border-2 border-slate-700/70 bg-slate-950 shadow-inner overflow-hidden"
      />
    </div>
  );
};

export default InteractiveMap;
