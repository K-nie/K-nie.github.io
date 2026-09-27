---
title:            "gfc — Genome Format Converters"
excerpt:          "A unified Python CLI for 30 bioinformatics file-format conversions with consistent flags, batch mode, and a published benchmark against the standard tools."
collection:       portfolio
---

**gfc** (Genome Format Converters) is a single command-line tool that replaces a
drawer full of one-off conversion scripts. It handles 30 conversions across the
formats that come up daily in genomics — VCF, GFF3, GTF, BED, GenBank, FASTA,
FASTQ, BAM, EIGENSTRAT, PLINK, MAF, MUMmer, HMMER, and Newick — behind one
consistent set of flags, with a batch mode for whole directories.

Each converter is benchmarked against the established single-purpose tool it
stands in for (convertf, plink2, AGAT, gffread, the UCSC utilities, EMBOSS, and
pyhmmer), so you can see where a unified interface costs you nothing and where it
saves time.

- **Repository:** [github.com/K-nie/genome-format-converters](https://github.com/K-nie/genome-format-converters)
- **Language / stack:** Python (pysam for BAM/VCF)
- **Install:** `pip install genome-format-converters`, or from source with `pip install -e .`
