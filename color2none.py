from PIL import Image

def make_black_transparent(image_path, output_path, threshold=10):
    # 打开图片
    image = Image.open(image_path)
    # 转换为RGBA，以便我们可以处理透明度
    image = image.convert("RGBA")
    # 加载图片数据
    datas = image.getdata()
    
    # 新图片数据
    new_data = []
    for item in datas:
        # 检查颜色是否接近黑色
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # 将黑色变为透明
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)
    
    # 更新图片数据
    image.putdata(new_data)
    # 保存新的图片
    image.save(output_path, "PNG")

# 使用函数
make_black_transparent("gofrontend.png", "outpu.png")