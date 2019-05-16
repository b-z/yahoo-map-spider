from PIL import Image

## Osaka
# center = [7179, 842]
# radius = 4
# level = 14

# center = [14358, 1684]
# radius = 4
# level = 15

# center = [28716, 3368]
# radius = 4
# level = 16

## Kyoto
# center = [7185, 851]
# radius = 4
# level = 14

# center = [14370, 1702]
# radius = 4
# level = 15

# center = [28740, 3404]
# radius = 4
# level = 16

## Tokyo
# center = [7276, 870]
# radius = 10
# level = 14

# center = [14552, 1740]
# radius = 10
# level = 15

# center = [29104, 3480]
# radius = 4
# level = 16

center = [58208, 6960]
radius = 15
level = 17


x = range(center[0] - radius, center[0] + radius + 1)
y = range(center[1] - radius, center[1] + radius + 1)
size = 512
w = size * (radius * 2 + 1)
h = size * (radius * 2 + 1)

# tmp = Image.open('images/14542_1730.png')
img = Image.new('RGB', (w, h))

for i in x:
	for j in y:
		filename = 'images/' + str(level) + '/' + str(i) + '_' + str(j) + '.png'
		print(filename)
		block = Image.open(filename)
		img.paste(block, box=(size * (i - x[0]), size * (y[-1] - j)))

savename = 'result' + '/' + str(level) + '_' + str(center[0]) + '_' + str(center[1]) + '_' + str(radius) + '.png'
img.save(savename)
print('Saved to ' + savename)