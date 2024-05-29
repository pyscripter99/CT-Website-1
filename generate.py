from jinja2 import Environment, FileSystemLoader
import os, shutil, json

with open('data/content.json') as f:
    content_data = json.load(f)

file_loader = FileSystemLoader('templates')
env = Environment(loader=file_loader)

output_dir = 'dist'
if os.path.exists(output_dir):
    shutil.rmtree(output_dir)

print("Coping static dir...")
shutil.copytree("static", output_dir)
print("Copied static dir")

for template_name in env.list_templates(extensions='html'):
    if template_name == 'base.html':
        continue

    page_data = content_data.get(template_name.split('.')[0], {})
    if not page_data:
        print(f"No data for {template_name}")

    template = env.get_template(template_name)
    output = template.render(page_data)

    output_path = os.path.join(output_dir, template_name)
    with open(output_path, 'w') as f:
        f.write(output)
    print(f"Generated {output_path}")

print("All HTML files generated.")
