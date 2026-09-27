---
title:            "myconote — Fungal Genome Annotation"
excerpt:          "A high-performance Rust pipeline that takes a fungal genome from raw assembly through NCBI submission, with an integrated RNA-seq and allele-specific-expression stack."
collection:       portfolio
---

**myconote** is an end-to-end annotation pipeline for fungal genomes, written in
Rust for speed and reproducibility. It carries an assembly all the way from raw
contigs to an NCBI-ready submission, and bundles an RNA-seq stack that includes
allele-specific expression.

The tool exposes 24 commands, draws on 15 annotation sources, understands all 25
NCBI genetic codes, and writes a JSON reproducibility manifest for every run so an
analysis can be reconstructed exactly. It ships as a Docker image and a
Singularity container for HPC clusters, plus a one-shot installer that builds the
binary and pulls the ~30 external tools and databases it depends on.

- **Repository:** [github.com/K-nie/myconote-cli](https://github.com/K-nie/myconote-cli)
- **Docs:** [k-nie.github.io/myconote-cli](https://k-nie.github.io/myconote-cli/)
- **Language / stack:** Rust; Docker / Singularity; conda for external tools
- **Install:** `docker pull ghcr.io/k-nie/myconote-cli:latest`, or `bash install.sh` for a native build
