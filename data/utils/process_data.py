import json

def process_us_co2_data(raw_data_file, output_data_file):
    with open(raw_data_file, 'r') as fin:
        data = json.load(fin)
    
    us_co2 = data["United States"]
    # for data in us_co2:
    #     data['name'] = str(data['year'])
    #     del data['year']

    with open(output_data_file, 'w') as fout:
        json.dump(us_co2, fout)

if __name__ == "__main__":
    process_us_co2_data('../raw_data/owid-co2-data.json', '../us_co2.json')