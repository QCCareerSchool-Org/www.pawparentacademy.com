export const courseCodes = [ 'nt', 'dm', 'pg', 'gd', 'tb', 'yk', 'tr', 'gr', 'pu' ] as const;

export type CourseCode = typeof courseCodes[number];

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

const names = {
  nt: 'Nail Trims Made Easy',
  dm: 'Deshedding Mastery',
  pg: 'Paws-itive Grooming',
  gd: 'How to Groom a Goldendoodle',
  tb: 'Teddy Bear Cuts',
  yk: 'How to Groom a Yorkie',
  tr: 'How to Groom a Terrier',
  gr: 'How to Groom a Golden Retriever',
  pu: 'How to Groom a Pug',
} as const satisfies Readonly<Record<CourseCode, string>>;

const baseUrl = 'https://www.pawparentacademy.com';

const urls = {
  nt: `${baseUrl}/courses/nail-trims-made-easy`,
  dm: `${baseUrl}/courses/deshedding-mastery`,
  pg: `${baseUrl}/courses/paws-itive-grooming`,
  gd: `${baseUrl}/courses/how-to-groom-a-goldendoodle`,
  tb: `${baseUrl}/courses/teddy-bear-cuts`,
  yk: `${baseUrl}/courses/how-to-groom-a-yorkie`,
  tr: `${baseUrl}/courses/how-to-groom-a-terrier`,
  gr: `${baseUrl}/courses/how-to-groom-a-golden-retriever`,
  pu: `${baseUrl}/courses/how-to-groom-a-pug`,
} as const satisfies Readonly<Record<CourseCode, string>>;

const descriptions = {
  nt: 'Learn calm routines, tool handling, and safety techniques so every nail trim—clipper or grinder—feels stress-free for you and your pup.',
  dm: 'Keep shedding under control with expert techniques for all breeds. Learn how to reduce loose fur and maintain a clean, healthy coat year-round.',
  pg: 'Grooming can be a paws-itive bonding experience for you and your furry friend! Learn to use positive reinforcement to make grooming fun and stress-free for both of you.',
  gd: 'If your dog has a lush, curly coat, this course is for you! Learn to properly brush out tangles, shape the perfect teddy bear trim, and maintain a healthy curl. You\'ll master every step of the grooming for a happy, well-groomed pooch.',
  tb: 'Give your pom (and every plush pup) the perfectly rounded, photo-ready teddy bear look at home. Follow detailed prep, scissoring, and finishing lessons that keep double coats full while preventing damage.',
  yk: 'Turn every at-home grooming session into a yorkie spa day. Learn how to prep, bathe, and finish silky coats so teddy bear cuts, schnauzer-inspired trims, and glam top knots look polished without salon visits.',
  tr: 'Wire-coated breeds have a coarse coat that needs special care to stay healthy and looking its best. In this course, you\'ll learn the best techniques, including handstripping and carding, to keep your dog\'s coat in top shape without damaging the coarse top coat.',
  gr: 'Feathered coats like cocker spaniels need strategic deshedding, silky skirt shaping, and spotless ear care. This course shows you exactly how to prep, trim, and finish every section so double coats stay plush without matting or losing their shine.',
  pu: 'Short, smooth coats still deal with itchy flare-ups, funky odors, and sensitive skin. Learn to choose the right shampoo, build a soothing bath routine, and keep wrinkles, paws, and bellies clean between washes.',
} as const satisfies Readonly<Record<CourseCode, string>>;

const subjects = {
  nt: [ 'Desensitization plans for anxious dogs', 'Clipper and grinder demos for every paw size', 'Tool checklists, troubleshooting, and pro tips' ],
  dm: [ 'Effective tools for de-shedding', 'Techniques for reducing fur buildup', 'Tips for maintaining coat health' ],
  pg: [ 'Positive reinforcement', "Overcoming your dog's fear of grooming", 'Making accommodations for your dog' ],
  gd: [ 'Step-by-step detangling methods', 'Professional trimming tips', 'Product recommendations for curly coats' ],
  tb: [ 'Face, ear, and tail shaping demos tailored to Pomeranians', 'Clipper guard + shear maps for plush density', 'Seasonal maintenance plans with tool + product checklists' ],
  yk: [ 'Daily brush maps, tear-stain care, and detangling routines for glassy coats', 'Clipper + scissor blueprints for teddy bear, schnauzer, layered, and top knot styles', 'Seasonal maintenance + product checklists to keep Yorkies comfy year-round' ],
  tr: [ 'Hand-stripping basics', 'Maintaining wiry texture', 'Avoiding skin irritation' ],
  gr: [ 'Spaniel-friendly feathering, skirt, and sanitary trims', 'Line brushing + blowout routines that protect the undercoat', 'Ear, paw, and tail care demos to prevent buildup' ],
  pu: [ 'Sensitive-skin bathing blueprint + product picks', 'Wrinkle, paw, and tail-pocket deep cleaning demos', 'Odor-neutralizing drying and coat-care routines' ],
} as const satisfies Readonly<Record<CourseCode, readonly string[] | undefined>>;

const workloads = {
  nt: undefined,
  dm: undefined,
  pg: undefined,
  gd: undefined,
  tb: undefined,
  yk: undefined,
  tr: undefined,
  gr: undefined,
  pu: undefined,
} as const satisfies Readonly<Record<CourseCode, string | undefined>>;

const enrollmentBaseUrl = 'https://enroll.pawparentacademy.com';

const enrollmentUrls = {
  nt: `${enrollmentBaseUrl}/NT`,
  dm: `${enrollmentBaseUrl}/DM`,
  pg: `${enrollmentBaseUrl}/PG`,
  gd: `${enrollmentBaseUrl}/GD`,
  tb: `${enrollmentBaseUrl}/TB`,
  yk: `${enrollmentBaseUrl}/YK`,
  tr: `${enrollmentBaseUrl}/TR`,
  gr: `${enrollmentBaseUrl}/GR`,
  pu: `${enrollmentBaseUrl}/PU`,
} as const satisfies Readonly<Record<CourseCode, string>>;

export const getCourseName = (c: CourseCode): string => {
  return names[c];
};

export const getCourseUrl = (c: CourseCode): string => {
  return urls[c];
};

export const getCourseDescription = (c: CourseCode): string => {
  return descriptions[c];
};

export const getCourseSubjects = (c: CourseCode): readonly string[] | undefined => {
  return subjects[c];
};

export const getCourseWorkload = (c: CourseCode): string | undefined => {
  return workloads[c];
};

export const getEnrollmentUrl = (c: CourseCode): string => {
  return enrollmentUrls[c];
};
