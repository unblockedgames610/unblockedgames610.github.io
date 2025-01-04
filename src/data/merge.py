import os
import json

# Đường dẫn tới thư mục chứa các tệp JSON
data_folder = './'

# Tên tệp JSON sau khi hợp nhất
output_file = 'merged.json'

# Tạo danh sách để lưu trữ dữ liệu từ tất cả các tệp JSON
merged_data = []

# Duyệt qua tất cả các tệp trong thư mục
for file_name in os.listdir(data_folder):
    if file_name.endswith('.json'):
        file_path = os.path.join(data_folder, file_name)
        
        # Đọc dữ liệu từ tệp JSON
        with open(file_path, 'r', encoding='utf-8') as file:
            try:
                data = json.load(file)
                # Nếu dữ liệu là một danh sách, nối thêm vào merged_data
                if isinstance(data, list):
                    merged_data.extend(data)
                # Nếu dữ liệu là một đối tượng, thêm vào merged_data
                elif isinstance(data, dict):
                    merged_data.append(data)
            except json.JSONDecodeError as e:
                print(f"Error reading {file_name}: {e}")

# Ghi dữ liệu hợp nhất vào tệp mới
output_path = os.path.join(data_folder, output_file)
with open(output_path, 'w', encoding='utf-8') as output:
    json.dump(merged_data, output, indent=4, ensure_ascii=False)

print(f"Đã hợp nhất tất cả tệp JSON vào {output_file}.")
