module Jekyll
  class CategoryExtractor < Generator
    safe true
    priority :normal

    def generate(site)
      site.collections['epraxis'].docs.each do |doc|
        # Extract category from path: _posts/epraxis/kommunikation/file.md
        path_parts = doc.relative_path.split('/')
        if path_parts.length >= 3
          category = path_parts[2] # kommunikation, privatsphaere, prozesse
          doc.data['categories'] ||= []
          doc.data['categories'] << category unless doc.data['categories'].include?(category)
        end
      end
    end
  end
end 
