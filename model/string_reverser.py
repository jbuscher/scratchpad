import argparse

def main():
	parser = argparse.ArgumentParser()
	parser.add_argument("file", help="file to reverse the contents of")
	args = parser.parse_args()
	file = open(args.file, 'r')
	print reverse(file.read())

def reverse(string):
	backwards = [0] * len(string)
	i = 1;
	for char in string:
		backwards[len(string) - i] = char
		i = i + 1
	return ''.join(backwards)

if __name__ == '__main__':
    main()