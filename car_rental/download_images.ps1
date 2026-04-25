$images = @{
  "baleno" = "https://upload.wikimedia.org/wikipedia/commons/e/e0/2022_Maruti_Suzuki_Baleno_Alpha_front_view.jpg"
  "brezza" = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Maruti_Suzuki_Brezza_ZXi%2B_%28facelift%29.jpg"
  "swift" = "https://upload.wikimedia.org/wikipedia/commons/1/1e/2024_Suzuki_Swift_%28Australia%29.jpg"
  "volvo" = "https://upload.wikimedia.org/wikipedia/commons/2/23/Volvo_XC90_T8_AWD_Plug-in_Hybrid_Plus_%28II%2C_2._Facelift%29_%E2%80%93_f_03102025.jpg"
  "curvv" = "https://upload.wikimedia.org/wikipedia/commons/1/1b/2025_Tata_Curvv_Creative%2B_S_Petrol_%28India%29_front_view.png"
  "scorpioClassic" = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Vehicle_of_Champhai_DC_%28SUV%29.jpg"
  "grandi10" = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Hyundai_Grand_i10_1.2_Design_2026.jpg"
  "thar" = "https://upload.wikimedia.org/wikipedia/commons/3/36/Mahindra_Thar_LX_Hard_Top%2C_front_8.19.22.jpg"
  "scorpioN" = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mahindra_Scorpio_N_Z8_L.jpg"
  "audiA4" = "https://upload.wikimedia.org/wikipedia/commons/3/35/Audi_A4_B9_sedans_%28FL%29_1X7A2441.jpg"
  "creta" = "https://upload.wikimedia.org/wikipedia/commons/3/32/2024_Hyundai_Creta_%28Indonesia%29_front_view.jpg"
  "verna" = "https://upload.wikimedia.org/wikipedia/commons/b/b5/2023_Hyundai_Verna_SX_1.5_Turbo_GDi_DCT.jpg"
  "innovaCrysta" = "https://upload.wikimedia.org/wikipedia/commons/5/5f/2021_Toyota_Kijang_Innova_2.4_V_A%2FT_%28GUN142R%3B_second_facelift%29%2C_South_Tangerang.jpg"
  "glanza" = "https://upload.wikimedia.org/wikipedia/commons/1/16/Toyota_Glanza.jpg"
  "fronx" = "https://upload.wikimedia.org/wikipedia/commons/8/80/2024_Suzuki_Fronx.jpg"
  "jaguar" = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jaguar_F-Pace_AWD_20d_registered_March_2019_1999cc_01_%28cropped%29.jpg"
  "cla200" = "https://upload.wikimedia.org/wikipedia/commons/7/71/Mercedes-Benz_C118_IMG_2673.jpg"
  "mercedesC" = "https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg"
  "tharRoxx" = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mahindra_Thar_ROXX_on_dirt.jpg"
  "ciaz" = "https://upload.wikimedia.org/wikipedia/commons/e/e3/Suzuki_Ciaz_1.4_GL_2016_1_%28Chile%29.jpg"
  "grandVitara" = "https://upload.wikimedia.org/wikipedia/commons/0/0f/2022_Suzuki_Grand_Vitara_GX_Smart_Hybrid_%28Indonesia%29_front_view.jpg"
  "endeavour" = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ford_Everest_3.0_V6_Turbo_Diesel_4WD_Platinum_%28III%29_%E2%80%93_f_02012026.jpg"
  "venue" = "https://upload.wikimedia.org/wikipedia/commons/0/05/2022_Hyundai_Venue_Limited_%28Facelift%29%2C_front_4.2.22.jpg"
  "xuv300" = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mahindra_XUV300.jpg"
  "legender" = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Toyota_Fortuner_GUN165_Legender_2.8_Q_4x2_Platinum_White_Pearl_Mica.jpg"
  "seltos" = "https://upload.wikimedia.org/wikipedia/commons/5/5b/2024_Kia_Seltos_SX_Turbo_%28facelift%29%2C_front_1.9.24.jpg"
}

$headers = @{
  "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

foreach ($key in $images.Keys) {
  $url = $images[$key]
  $ext = if ($url -match "\.png$") { "png" } else { "jpg" }
  $dest = "c:\Users\asus\OneDrive\Desktop\Chand\stscarrental\car_rental\src\assets\images\$key.$ext"
  Write-Host "Downloading $key..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -Headers $headers
    Write-Host "Success: $key"
  } catch {
    Write-Host "Failed: $key - $($_.Exception.Message)"
  }
}
