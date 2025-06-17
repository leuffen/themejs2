# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "themejs2"
  spec.version       = "0.1.0"
  spec.authors       = ["koljapluemer", "Matthias Leuffen"]
  spec.email         = ["github@koljapluemer.com", "matthias@leuffen.com"]

  spec.summary       = "A theme compatible with the nextrap project."
  spec.homepage      = "https://github.com/leuffen/themejs2"
  spec.license       = "See LICENSE.txt"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
