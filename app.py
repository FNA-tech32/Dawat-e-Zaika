import os
from PIL import Image
import pillow_avif  # Ensures AVIF support is registered

# Define supported input formats
input_extensions = {'.jpg', '.jpeg', '.png', '.avif', '.webp'}
output_format = 'PNG'

def convert_and_compress_images(root_dir):
    for filename in os.listdir(root_dir):
        file_path = os.path.join(root_dir, filename)
        name, ext = os.path.splitext(filename)

        if ext.lower() in input_extensions:
            output_path = os.path.join(root_dir, f"{name}.png")

            # Skip if it's already a PNG and the file exists
            if os.path.exists(output_path) and ext.lower() == '.png':
                print(f"Skipping already processed PNG: {filename}")
                continue

            try:
                with Image.open(file_path) as img:
                    img = img.convert('RGBA')  # Convert to support transparency
                    img.save(output_path, format=output_format, optimize=True)
                    print(f"Converted: {filename} → {name}.png")

                # Delete the original file if it's not a PNG
                if ext.lower() != '.png':
                    os.remove(file_path)
                    print(f"Deleted original: {filename}")

            except Exception as e:
                print(f"Failed to process {filename}: {e}")

if __name__ == '__main__':
    convert_and_compress_images(os.getcwd())
