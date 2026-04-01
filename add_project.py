import os
import shutil
import sys

PROJECTS_FILE = "projects.js"
PHOTOS_DIR = "photos"

def get_input(prompt, default=None):
    if default:
        user_input = input(f"{prompt} [{default}]: ").strip()
        return user_input if user_input else default
    else:
        while True:
            user_input = input(f"{prompt}: ").strip()
            if user_input:
                return user_input
            print("This field is required.")

def format_as_html(lines):
    """Joins lines, splits by double-newlines, and wraps in <p> tags if needed."""
    full_text = "\n".join(lines).strip()
    if not full_text:
        return ""
    
    # If the user already started with an HTML tag, assume they're handling it
    if full_text.startswith("<"):
        return full_text
    
    # Otherwise, split by double newlines to identify paragraphs
    paragraphs = [p.strip() for p in full_text.split('\n\n') if p.strip()]
    wrapped = [f"<p>{p}</p>" for p in paragraphs]
    
    # Join with indentation for a clean projects.js file
    return "\n      ".join(wrapped)

def copy_image(src_path, project_id, image_type):
    """Copies image to photos/ directory and returns the relative path."""
    # Clean the path in case the user pasted it with quotes
    src_path = src_path.strip().strip('"').strip("'")
    
    if not os.path.exists(src_path):
        print(f"Error: File '{src_path}' not found.")
        return None
    
    ext = os.path.splitext(src_path)[1].lower()
    dest_filename = f"{project_id}-{image_type}{ext}"
    dest_path = os.path.join(PHOTOS_DIR, dest_filename)
    
    shutil.copy2(src_path, dest_path)
    print(f"Copied: {src_path} -> {dest_path}")
    return f"photos/{dest_filename}"

def add_project():
    print("--- Add a New Project ---")
    print("(Note: For long text sections, press Enter for a blank line between paragraphs.")
    print(" Type 'END' on a new line when you're finished with a section.)\n")
    
    project_id = get_input("1. Project ID (URL-friendly, e.g., my-cool-project)")
    title      = get_input("2. Project Title")
    era        = get_input("3. Era (college/highschool)", "college")
    tagline    = get_input("4. Tagline (short subtitle)")
    card_text  = get_input("5. Card Text (short description for grid)")
    
    print("\n--- Image Setup ---")
    thumb_src = get_input("6. Path to Thumbnail Image (e.g., C:\\path\\to\\img.jpg)")
    hero_src  = get_input("7. Path to Hero Image")
    
    thumb_path = copy_image(thumb_src, project_id, "thumbnail")
    hero_path  = copy_image(hero_src, project_id, "hero")
    
    if not thumb_path or not hero_path:
        print("\nImage processing failed. Please check your paths and try again.")
        return

    print("\n--- 8. Project Overview ---")
    print("Enter the 'What/Why'. (Blank line for new paragraph, type 'END' to finish):")
    overview_lines = []
    while True:
        line = input()
        if line.strip().upper() == 'END': break
        overview_lines.append(line)
    overview = format_as_html(overview_lines)

    print("\n--- 9. Technical Details ---")
    print("Enter the 'How'. (Blank line for new paragraph, type 'END' to finish):")
    technical_lines = []
    while True:
        line = input()
        if line.strip().upper() == 'END': break
        technical_lines.append(line)
    technical = format_as_html(technical_lines)

    # Format as JS object string
    js_object = f"""  {{
    id: "{project_id}",
    era: "{era}",
    title: "{title}",
    tagline: "{tagline}",
    thumbnail: "{thumb_path}",
    thumbnailAlt: "{title} Thumbnail",
    cardText: "{card_text}",
    heroImage: "{hero_path}",
    heroAlt: "{title} Hero",
    overview: `{overview}`,
    technical: `{technical}`
  }}"""

    # Update projects.js
    with open(PROJECTS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    last_bracket_idx = content.rfind('];')
    if last_bracket_idx == -1:
        print(f"Error: Could not find the end of PROJECTS array in {PROJECTS_FILE}.")
        return

    prefix = content[:last_bracket_idx].rstrip()
    if prefix.endswith('}'):
        new_content = prefix + ",\n" + js_object + "\n];\n"
    else:
        new_content = prefix + "\n" + js_object + "\n];\n"

    with open(PROJECTS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"\n🚀 Successfully added '{title}' to {PROJECTS_FILE}!")

if __name__ == "__main__":
    if not os.path.exists(PHOTOS_DIR):
        os.makedirs(PHOTOS_DIR)
    add_project()
